export class Page {
    constructor(params) {
        this.params = params
    }

    getRoute() {
        throw new Error('Method gerRoute should be implemented')
    }

    afterRender() {

    }

    destroy() {

    }
}
