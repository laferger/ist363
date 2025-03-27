const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}, 
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'}, 
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

const filteredStudents = students.filter(student => 
  student.name.toLowerCase().includes(searchTerm.toLowerCase()));

function App() {
   
  return (
    <div>
      <h1>Students</h1>
      <label>Search Names: 
        <input type="text" id="searchTerm" onChange={someFunction} />
      </label>
      <ul>
        {
          filteredStudents.map(function(item) {
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