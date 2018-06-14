const dom = {
    /**
     * 绑定方法
     * @param element 需要绑定方法的DOM
     * @param eventType 方法名称
     * @param selector 目标DOM的 className
     * @param fn 绑定的方法
     * @returns 返回element
     */
    on: function (element, eventType, selector, fn) {
        element.addEventListener(eventType, e => {
            let el = e.target;
            while (!el.matches(selector)) {
                if (element === el) {
                    el = null;
                    break;
                }
                el = el.parentNode;
            }
            el && fn.call(el, e, el);
        });
        return element;
    },
    /**
     * 找出element在父类中排行的位置
     * @param element 需要操作的DOM
     * @returns INT
     */
    index: function (element) {
        let siblings = element.parentNode.children;
        for (let index = 0; index < siblings.length; index++) {
            if (siblings[index] === element) {
                return index;
            }
        }
        return -1;
    },
    /**
     * @param element 目标dom
     * @param className 目标DOM 需要添加的className
     * @returns element
     */
    uniqueClass: function (element, className) {
        dom.every(element.parentNode.children, el => {
            el.classList.remove(className);
        });
        element.classList.add(className);
        return element;
    },
    /**
     * @param nodeList DOM 数组
     * @param fn 循环执行的方法
     * @returns DOM 数组
     */
    every: function (nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn(nodeList[i], i);
        }
        return nodeList;
    }
};

module.exports = dom;
