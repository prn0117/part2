import Header from './Header';
import Total from './Total';
import Content from './Content';


const Course = ({courses}) => {
    

    return (
        <>
        {courses.map(course => 
        <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts.concat()} />
            <Total sumArr={course.parts.concat()} />
        </div>
        )}
        </>
    )
}
export default Course;

/**
 * const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
 */