let tweets = [
  {
    id: '1',
    text: 'ㅏㅇ휴...',
    createdAt: Date.now().toString(),
    name: 'bob',
    username: 'bob',
    url: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg'
  },
  {
    id: '2',
    text: 'ㅎㄷ흫듷듣ㅎ드흗흗흗...',
    createdAt: Date.now().toString(),
    name: '앨리스',
    username: '앨리스',
    url: 'https://cdn.expcloud.co/life/uploads/2020/04/27135731/Fee-gentry-hed-shot-1.jpg'
  }
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username
  };

  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) tweet.text = text;

  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
