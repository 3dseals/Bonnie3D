(function ($) {

    class Node extends Bonnie3D.Object {

        constructor(name) {

            super(name);

            this._position = new Bonnie3D.Vector3();
        }

        addChild(node) {

        }

        addComponent(component) {

        }

        get position() {

            return this._position;

        }

    }

    Bonnie3D.Node = Node;

}(this));
