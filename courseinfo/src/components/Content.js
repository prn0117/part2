import Part from './Part';

const Content = ({ parts }) => 
    
        <>
        {parts.map(part => 
             <Part key={part.id} part={part.name} exercises={part.exercises}/>
            )}
        </>

    
//   <>
//     <Part part={parts[0]} />
//     <Part part={parts[1]} />
//     <Part part={parts[2]} /> 
//     <Part part={parts[3]} />     
//   </>

  export default Content;

  /**
   * {courses.map(course => 
        <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts.concat()} />
            <Total sumArr={course.parts.concat()} />
        </div>
        )}
   */