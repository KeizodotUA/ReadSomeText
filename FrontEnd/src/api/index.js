import API from 'src/API';

export const getText = () => (
    API.get('/?type=all-meat&paras=10&start-with-lorem=0&format=text')
      .then(({ data }) => data)
  );