import {useState} from "react"
import {
    doc,
    addDoc,
    collection,
    getDocs,
    getFirestore,
    query, orderBy, limit,where
} from "firebase/firestore"
import moment from "moment";
import { getAuth } from "firebase/auth";

export function useSleep() {
    const db = getFirestore();
    
    const [email, setEmail] = useState("")
    const getEmail = getAuth()


    getEmail.onAuthStateChanged(user =>{
        setEmail(user?.email)
  
    })
   
    const ref = collection(db,"sleep")
    
    const createSleep = (sleepTime) => addDoc(ref,sleepTime)
    const weeklySleeps = () => getDocs(ref)
    const getSleep = () => query(ref, where("email","==", email), orderBy("createdAt","desc"), limit(1))
    const calculatedHoursSlept = (sleep) => {

        const sleepTime = sleep[0]
        const wakeTime = sleep[1]
        console.log(sleep)
        const start = moment(sleepTime, "hh:mm A")
        const end = moment(wakeTime, "hh:mm A")

        let duration = 0
        
        if( start > end){
            moment().endOf(end)
            const end2 = moment(end).add(24, 'hours')
            // If you wake up a day later
            
            duration = moment.duration(end2.diff(start))
        }else{
            // if you wake up in the same day

            duration = moment.duration(end.diff(start))
        }
        
        const hours = duration.asHours()

        
        return hours
        }

    return {getSleep, createSleep,weeklySleeps,calculatedHoursSlept}
}

