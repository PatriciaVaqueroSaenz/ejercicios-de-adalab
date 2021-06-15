const getApiData = () => {
  return (
    fetch('//randomuser.me/api/?results=10')
      // He quitado el https: de la URL anterior
      // Si quieres saber por qué visita https://books.adalab.es/materiales-del-curso-m/-MWwxsiZJuVMKjilarms/despues_de_acabar_el_curso/errores_comunes_en_programacion#mixed-content-http-vs-https
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
      })
  );
};

export default getApiData;
