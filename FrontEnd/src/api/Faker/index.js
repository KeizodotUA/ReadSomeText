import faker from 'faker';

export const getRandomEntries = () => {
    var retValue = new Array();
    for (var i = 0; i < 50; i++){
        var entry = {
            id: i,
            author: faker.internet.userName(),
            title: faker.lorem.words(),
            views: faker.random.number(),
            likes: faker.random.number(),
            bookmarkts: faker.random.number()
        }
        retValue.push(entry);
    }

    return retValue;
}

