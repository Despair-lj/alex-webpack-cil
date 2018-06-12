// import List from './todo/List.san';
import Laibas from './laibas/laibas.san';
import Landingzap from './landingzap/landingzap.san';
import {
    router
} from 'san-router';

require('./main.css');

router.add({
    rule: '/laibas',
    Component: Laibas,
    target: '#app'
});
router.add({
    rule: '/',
    Component: Landingzap,
    target: '#app'
});
// start
router.start();
