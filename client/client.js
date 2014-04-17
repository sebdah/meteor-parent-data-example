Template.parents.helpers({
  parents: function () {
    return Parents.find({}).fetch();
  }
});

Template.children.helpers({
  children: function () {
    return Children.find({ parentId: this._id }).fetch();
  }
});