(function ($) {

    class Component extends Bonnie3D.Object {

        constructor() {

            super();

            this._node = null;

        }

        set node(node) {

            this._node = node;

        }

        get node() {

            return this._node;

        }

    }

    Bonnie3D.Component = Component;

}(this));