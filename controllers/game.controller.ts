import moment from 'moment';
import { Request, Response } from 'express';
import AdminChallenge from '../models/Challenge';
import PlayChallenge from '../models/PlayChallenges';
import PlayedChallenges from '../models/PlayedChallenges';
import User from '../models/User';

export const start = async (req: Request, res: Response) => {
    if(req.body.uid) {
        if(req.body.cid) {
            await AdminChallenge.findOne({index: req.body.cid}).then(async (challenge_model: any) => {
                if(challenge_model.status === 2) {
                    res.json({ success: false, message: 'Challenge closed.' });
                } else {
                    let isValid = true;
                    if(challenge_model.coin_sku !== 1) {
                        await User.findOne({index: req.body.uid}).then((user: any) => {
                            if(user.money.quest < challenge_model.qc) {
                                isValid = false;
                            }
                            else {
                                user.money.quest -= challenge_model.qc;
                                user.save().then((err: any) => {
                                    challenge_model.status = 2;
                                    challenge_model.save();
                                });
                            }
                        });
                    }
                    if(!isValid) {
                        res.json({ success: false, message: 'You have too low Quest Credit' });
                    } else {
                        await PlayChallenge.findOne({ challenge_id: challenge_model.index, user_id: req.body.uid }).then((play_model: any) => {
                            if(!play_model) {
                                play_model = new PlayChallenge;
                                play_model.user_id = req.body.uid;
                                play_model.challenge_id = challenge_model.index;
                                play_model.save();
                            }
                        });
                        res.json({ success: true });
                    }
                }
            })
        } else {
            res.json({ success: false, message: 'Please select correct challenge' });
        }
    } else {
        res.json({ success: false, message: 'Please login!' });
    }
}

export const get_challenge = (req: Request, res: Response) => {
    AdminChallenge.findOne({ status: 1 }).then((data: any) => {
        console.log('get-challenge');
        res.json({ status: 1, data });
    })
}

export const get_challenge_by_id = (req: Request, res: Response) => {
    AdminChallenge.findOne({index: req.body.challenge_id}).then((data: any) => {
        console.log('get-challenge-by-id', data);
        res.json({ status: 1, data });
    })
}

export const start_challenge = (req: Request, res: Response) => {
    AdminChallenge.findOne({index: req.body.challenge_id}).then((challenge_model: any) => {
        console.log('start-challenge', req.body);
        if(challenge_model.status === 2) {
            res.json({ status: 0, message: 'Challenge is closed' });
        } else {
            const play_challenge = new PlayChallenge;
            play_challenge.user_id = req.body.user_id;
            play_challenge.challenge_id = req.body.challenge_id;
            play_challenge.save().then(err => {
                res.json({ status: 1, message: 'Challenge Started', data: play_challenge })
            })
        }
    })
}

export const start_match = (req: Request, res: Response) => {
    console.log('start-match', req.body);
    PlayChallenge.find({ challenge_id: req.body.match_id, user_id: req.body.user_id }).sort({ createdAt: -1 }).then((model: any) => {
        console.log('start-match, playChallenge', model);
        PlayedChallenges.find({ user_id: model[0].user_id }).sort({ createdAt: -1 }).then((prev_match: any) => {
            if(prev_match.length > 0) {
                prev_match[0].winorloss = 0;
                prev_match[0].end_match = 'Closed by system';
                prev_match[0].status = 2;
                prev_match[0].save();
            }
            const start = new PlayedChallenges;
            start.challenge_id = req.body.match_id;
            start.user_id = model[0].user_id;
            start.start_match = moment().format('YYYY-MM-DD HH:mm:ss');
            start.end_match = 'not set';
            start.winorloss = 'not set';
            start.save();
            console.log('start-match, PlayedChallenge', start);

            res.json({ status: 1, message: "Match Started", data: start });
        });
    })
}

export const submit_result = (req: Request, res: Response) => {
    console.log(req.body);
    // const challenge_id = req.body.match_id;

    // // win = 1 | loss = 0
    // const result = req.body.result;
    // let iswonchallenge = false;
    // console.log('submit-result', req.body);
    // PlayedChallenges.findOne({challenge_id}).then((played_model: any) => {
    //     const user_id = played_model.user_id;

    //     // update user challenge table
    //     PlayChallenge.findOne({ challenge_id: played_model.challenge_id, user_id}).then((play_model: any) => {

    //         // update user match table
    //         played_model.winorloss = result;
    //         played_model.end_match = moment().format('YYYY-MM-DD');
    //         played_model.status = 2;
    //         played_model.save();

    //         // get main task
    //         AdminChallenge.findById(played_model.challenge_id).then((main_challenge: any)=> {
    //             if(result === 1)
    //                 play_model.win_match = play_model.win_match + 1;
    //             else
    //                 play_model.loss_match = play_model.loss_match + 1;
    //             play_model.save();

    //             // if loss back 2 step
    //             if(result === 0) {
    //                 let contrast_temp = play_model.current_match - 2;
    //                 if(contrast_temp < 0) {
    //                     contrast_temp = 0;
    //                 }
    //                 play_model.current_match = contrast_temp;
    //                 play_model.save();
    //             }

    //             // if win increase 1 step
    //             if(result === 1) {
    //                 play_model.current_match = play_model.current_match + 1;
    //                 play_model.save();
    //             }

    //             // if not win & not bitp set visible
    //             if(result === 0 && main_challenge.coin_sku !== 1) {
    //                 main_challenge.status = 1;
    //                 main_challenge.save();
    //             }

    //             if(play_model.current_match === main_challenge.streak) {
    //                 play_model.status = 2;
    //                 play_model.iswonchallenge = 1;
    //                 play_model.save();

    //                 iswonchallenge = true;

    //                 AdminChallenge.findById(play_model.challenge_id).then((admin_challenge_model: any) => {
    //                     admin_challenge_model.status = 2;
    //                     admin_challenge_model.save();

    //                     // update user balance
    //                     // call to dapp api
    //                 });
    //             }

    //             if(iswonchallenge) {
    //                 User.findById(play_model.user_id).then((user: any) => {
    //                     if(main_challenge.coin_sku === 1)
    //                         user.money.bitp = main_challenge.amount;
    //                     else if(main_challenge.coin_sku === 2)
    //                         user.money.busd = main_challenge.amount;
    //                     else if(main_challenge.coin_sku === 3)
    //                         user.money.usdt = main_challenge.amount;

    //                     user.save();
    //                 });
    //             }
    //             console.log('result', iswonchallenge);

    //             res.json({ status: 1, iswon: iswonchallenge, message: 'Result submitted' });
    //         })
    //     })
    // })
}