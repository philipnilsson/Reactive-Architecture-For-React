import Bacon from 'baconjs';

Bacon.Observable.prototype.debounceResponsive = function (delay) {
    return new Bacon.EventStream(sink => {
        let waiting = false;
        let queue = null;
        let timeout;
        return this.subscribe(event => {
            if (!waiting) {
                sink(event);
            } else {
                queue = { event }
            }
            waiting = true;
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                waiting = false;
                if (queue) {
                    sink(queue.event)
                    queue = null;
                }
            }, delay);
        });
    });
}
