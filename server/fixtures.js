if (Parents.find().count() === 0 && Children.find().count() === 0) {
  console.log('Adding fixtures to MongoDB');

  var parent1Id = Parents.insert({ name: 'Sebastian Dahlgren' });
  Children.insert({ name: 'Sebastians child 1', parentId: parent1Id });
  Children.insert({ name: 'Sebastians child 2', parentId: parent1Id });
  Children.insert({ name: 'Sebastians child 3', parentId: parent1Id });
  Children.insert({ name: 'Sebastians child 4', parentId: parent1Id });

  var parent2Id = Parents.insert({ name: 'Alex Webster' });
  Children.insert({ name: 'Alex child 1', parentId: parent2Id });
  Children.insert({ name: 'Alex child 2', parentId: parent2Id });

  var parent3Id = Parents.insert({ name: 'Luke Skywalker' });
  Children.insert({ name: 'Lukes child 1', parentId: parent3Id });
  Children.insert({ name: 'Lukes child 2', parentId: parent3Id });
}
