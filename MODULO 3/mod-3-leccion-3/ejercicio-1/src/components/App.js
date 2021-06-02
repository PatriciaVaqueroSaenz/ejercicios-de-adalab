import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: 'A',
        name: 'Sofía',
        age: 20
      },
      {
        promo: 'B',
        name: 'María',
        age: 21
      },
      {
        promo: 'A',
        name: 'Lucía',
        age: 22
      }
    ];
    //APARTADO B, ESTUDIANTES FILTRADAS POR PROMO
    const filteredStudents = students.filter(student => {
      return student.promo=== 'A';
    });
    
    return (
      <div>
        <h1>Pintar listados con React:</h1>
         {/* con este map iteramos el array de items */}
        {filteredStudents.map(student => {
          // cada return retorna un li
          return (
            <li key={student.name}>
              <h2>Nombre: {student.name}</h2>
              <p>Edad: {student.age}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
