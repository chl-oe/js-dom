/* Modifiez la fonction sleep pour qu’elle déclenche une erreur (throw) lors de son éxecution.
Cela nous permettra de simuler le comportement d’une requête qui échoue si le 2e argument est faux :
sleepThrow(2000, true); //success
sleepThrow(2000, false); //failed
⚠ la fonction sleepError devra être exporté via un module.exports
indice: newPromise((resolve, reject) ⇒ …));*/

const sleepError (ms, success) = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve ();
    } else {
      reject ()
    }
  }, ms);
  });

  module.exports = sleepError;

