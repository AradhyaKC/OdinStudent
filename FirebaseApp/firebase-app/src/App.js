import { async } from '@firebase/util';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, DocumentSnapshot, getFirestore, onSnapshot, query, Query, serverTimestamp,orderBy,limit} from 'firebase/firestore';
import { useState } from 'react';
import './App.css';

function App() {

  var auth = getAuth();
  var firestore = getFirestore();
  const [tempState,setTempState] =useState(0);
  const [messages,setMessages] =useState([]);
  const SignIn=async()=>{
    var googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth,googleAuthProvider);
    if(auth.currentUser!=undefined){
      console.log(auth.currentUser);
      setTempState(1);
      var myQuery =query(collection(getFirestore(),"Messages"),orderBy("timeStamp","desc"),limit(10));
      onSnapshot(myQuery,async(snapshot)=>{
        snapshot.docChanges().forEach(async function(change) {
          var message = change.doc.data();
          await setMessages(( prevMessages)=>{
            prevMessages.push(message);
            return prevMessages;
          });
        });    
      });
    }
  };
  const SignOut =async()=>{
    await signOut(auth);
    setTempState(0);
  };

  const SendInput=async (e) =>{
    e.preventDefault();
    if(auth.currentUser==undefined) return;
    var inputText = document.querySelector('#inputText');
    console.assert(inputText!=undefined);
    try{
      await addDoc(collection(getFirestore(),'Messages'),{
        name:auth.currentUser.displayName, text:inputText.value, pfpURL:auth.currentUser.photoURL, timeStamp:serverTimestamp()
      });
      setTempState(0);
      console.log("added DOc");
    }catch(error){
      console.error('Error writing new message to Firebase Database', error);
    }
  };

  return (
    <div className="App">
      Los Pollos hermanos 
      { auth.currentUser==undefined &&
        <button onClick={SignIn}>
        Click here to sign in 
        </button>
      }
      {
        auth.currentUser!=undefined && <button onClick={SignOut}> Click here to Sign out </button>
      }
      {auth.currentUser==undefined && <div> no user signed in </div>}
      {auth.currentUser!=undefined && <div> the currentUser signed in is 
        {auth.currentUser.displayName} with pfp <img src={auth.currentUser.photoURL}></img></div> }

      <div>
        <div>
          {messages!=undefined && messages.map((element,index)=><div key={index}>{element.text} message No {index}</div>)}
        </div>
        <form onSubmit={SendInput}>
          <input type='text' id="inputText" name='inputText' placeholder="write your message here "/>
          <button type='submit'> click to submit</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
