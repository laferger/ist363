const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

  function App() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {
            students.map(function(item) {
            return <li key={item.suid}>
                    Name: {item.name}<br />
                    Year: {item.year}<br />
                    Major: {item.major}<br />
                  </li>;
          })}
        </ul>
      </div>
    );
    }



export default App;
