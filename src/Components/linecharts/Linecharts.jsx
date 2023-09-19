import { LineChart as Lchart,Line, Tooltip,YAxis,XAxis,AreaChart,CartesianGrid,Area} from 'recharts';

import { Dna } from  'react-loader-spinner'

const Linecharts = () => {
  

    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 85, chemistry: 90, math: 78 },
        { id: 2, name: 'Bob', physics: 78, chemistry: 85, math: 80 },
        { id: 3, name: 'Charlie', physics: 92, chemistry: 88, math: 95 },
        { id: 4, name: 'David', physics: 88, chemistry: 84, math: 90 },
        { id: 5, name: 'Emma', physics: 70, chemistry: 75, math: 68 },
        { id: 6, name: 'Frank', physics: 95, chemistry: 91, math: 97 },
        { id: 7, name: 'Grace', physics: 82, chemistry: 78, math: 85 },
        { id: 8, name: 'Hannah', physics: 79, chemistry: 83, math: 77 },
        { id: 9, name: 'Ian', physics: 87, chemistry: 89, math: 84 },
        { id: 10, name: 'Jack', physics: 90, chemistry: 88, math: 92 }
    ];





    return (
        <div className='mt-24'>
            <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
            <Lchart width={900} height={500} data={subjectMarksData} >


<Line  dataKey="math" stroke="rgb(220 38 38)"></Line>
<Line  dataKey="physics" stroke="blue"></Line>
<Line  dataKey="chemistry" stroke="green"></Line>
<XAxis dataKey="name" />

<YAxis />
<Tooltip />
            </Lchart>


            <AreaChart width={700} height={400} data={subjectMarksData}>

<CartesianGrid strokeDasharray="3 3"></CartesianGrid>

<XAxis dataKey="name" />
<YAxis></YAxis>
<Tooltip></Tooltip>
<Area dataKey="math" stroke='rgb(220 38 38)'></Area>
<Area type="cardinal" dataKey="chemistry "stroke='rgb(210 30 38)'></Area>
<Area dataKey="physics "stroke='rgb(219 38 78)'></Area>
            </AreaChart>
          
        </div>
    );
};

export default Linecharts;