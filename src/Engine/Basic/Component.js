(function ($) {

    class Component extends Bonnie3D.Object {

        constructor(name) {

            super(name);

            this._node = new Bonnie3D.Node(name);

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