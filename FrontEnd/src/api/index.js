import API from 'src/API';

export const getText = () => (
    API.get('/?type=all-meat&paras=4&start-with-lorem=0&format=text')
      .then(({ data }) => data)
  );