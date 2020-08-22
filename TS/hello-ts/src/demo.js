/** 
import React from "react"
import "./demo.css"


export const MyComponent = () => {
    // setState => setData
    // data: {
    //    myName: 'john Doe'
    // }
    // MVVM
    // react hooks  setData

    const [myName, setMyName] = React.useState('John Doe')

    return (
        <div>
            <h2 className="title">{myName}</h2>
            <input
                value={myName}
                onChange={(e) => setMyName(e.target.value)}  //  修改自己输入的值
            />
        </div>
    )

}
*/


import React from "react"

export const MyComponent = () => {
    const [userName, setUserName] = React.useState("")
    const [list, setList] = React.useState([])
    // onLoad()声明周期函数
    React.useEffect(() =>{   //  ==> onLoad()
        // setTimeout(()=>{
        //     setUserName('John')
        // },1500)
        fetch('http://neteasecloudmusicapi.zhaoboy.com/toplist/detail')
        .then(data => data.json())
        .then(data =>{
            // console.log(data);
            setList(data.list)
        })
    },[])   
    return (
        <div>
            <h4>{userName}</h4>
            <input value={userName} 
                onChange={e=>setUserName(e.target.value)} />
                <ul>
                {
                    list.map(item => <li>{item.description}</li>)
                }
                </ul>
        </div>
    )
}