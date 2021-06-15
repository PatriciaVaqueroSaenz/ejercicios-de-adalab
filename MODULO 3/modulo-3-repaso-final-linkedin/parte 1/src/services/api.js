const getApiData = () => {
  return fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      const cleanData = data.results.map(user => {
        return {
          id: user.login.uuid,
          gender: user.gender,
          city: user.location.city,
          image: user.picture.large,
          name: `${user.name.first} ${user.name.last}`
        };
      });
      return cleanData;
    });
};

export default getApiData;
