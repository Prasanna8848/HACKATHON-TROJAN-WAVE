import {React, Fragment} from 'react'
import classes from './AvailableTeachers.module.css'
import Card from './Card'
import AvailableList from './AvailableList'

import {useState, useEffect} from 'react'

const DUMMY_TEACHERS = [
  {id:'t1', name:'Hello', sem:'sem-third' , univeristy:'Univeristy -Kiit University' , fee:'Rs 20/Hour', rating:'3.6', avatar:'https://iili.io/mP1iGa.png'},
  {id:'t2', name:'Hello', sem:'sem-third' , univeristy:'Univeristy -Kiit University' , fee:'Rs 20/Hour', rating:'3.6', avatar:'https://iili.io/mP1iGa.png'},
  {id:'t3', name:'Hello', sem:'sem-third' , univeristy:'Univeristy -Kiit University' , fee:'Rs 20/Hour', rating:'3.6', avatar:'https://iili.io/mP1iGa.png'},{id:'t1', name:'Hello', sem:'sem-third' , univeristy:'Univeristy -Kiit University' , fee:'Rs 20/Hour', rating:'3.6', avatar:'https://iili.io/mP1iGa.png'},{id:'t4', name:'Hello', sem:'sem-third' , univeristy:'Univeristy -Kiit University' , fee:'Rs 20/Hour', rating:'3.6', avatar:'https://iili.io/mP1iGa.png'},
]
const AvailableTeachers = () => {
  const [teacherData, setTeacherData] = useState([])
  useEffect(() => {
    setTeacherData(DUMMY_TEACHERS)
  },[])
  return (
    <div className={classes['container']}>
      <div className={classes['container__heading']}>
      <img src="https://iili.io/mP0Txe.png" alt="img"/>
        <h1>Available DSA Teachers</h1>
        <div className={classes['action']}>
        <div className={classes['filter']}>
        <img src="https://iili.io/mP0zb9.png"/>
          <span>filter</span>
        </div>

        <div className={classes['sort']}>
        <img src="https://iili.io/mP1muI.png"/>
          <span>Sort</span>
        </div>
        </div>
      </div>
      <div className={classes['subjects__container']}>
        {teacherData?.map((person) => {
      return(
        <Fragment>
        <div className={classes['subject__card']}>
        <AvailableList key={person.id} name={person.name} rating={person.rating} rating_img={person.rating_img} university={person.university} sem={person.sem} avatar={person.avatar} fee={person.fee}  />
        </div>
          </Fragment>
      )
        })}
      </div>
    </div>
  )
}

export default AvailableTeachers