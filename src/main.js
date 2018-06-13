// import List from './todo/List.san';

// import Laibas from './laibas/laibas.san';
// import Landingzap from './landingzap/landingzap.san';
// import Baidu from './baidu/index.san';
// import score from './score/index.san';
// import qdjj from './qdjj/index.san';
// import threeD from './threeD/index.san';
// import runningCar from './runningCar/index.san';
import jike from './jike/index.san';
// import classification from './classification/index.san';
// import calc from './calc/index.san';
// import findChar from './findChar/index.san';
// import calc from './calc/indexUpdate.san';

import {
    router
} from 'san-router';

require('./main.css');

router.add({
    rule: '/',
    Component: jike,
    target: '#app'
});

// router.add({
//     rule: '/',
//     Component: score,
//     target: '#app'
// });

// router.add({
//     rule: '/baidu',
//     Component: Baidu,
//     target: '#app'
// });
// router.add({
//     rule: '/laibas',
//     Component: Laibas,
//     target: '#app'
// });
// router.add({
//     rule: '/landingzap',
//     Component: Landingzap,
//     target: '#app'
// });
// start
router.start();
