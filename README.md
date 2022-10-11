#  ```  BLOX! ```

*Share, Upload, View, Blox!*

*A new way to store your files securely.*

## BLOX?

With rising technologies like IPFS and Blockchain, you can store your files in a decentralized network. With " BLOX! " you dont need to trust third parties to store your precious files . Besides that , you dont need to worry about the existence of your files, they will live in the BLOX! as long as you wish, and will be accessible from anywhere in the universe !

---

## HOW?

How "BLOX!" work ?  

BLOX! lets you upload your files to IPFS and store the link data in the blockchain. It's that simple. This way you can access your files anywhere with the internet connection !

## LET'S GET STARTED!

If you want to test BLOX! in your local host, follow the instructions, upload your files to your local blockchain !

### Pre-reqs

1. Node.js
2. Truffle
3. Ganache
4. MetaMask
5. IPFS



### Jump In To It!

1. Install node

   > npm install

2. Add ganache host and port to truffle-config.js

   > networks: {
   >
   >   development: { 
   >
   > host: "127.0.0.1",
   >
   > port: 7545,
   >
   > network_id: "*" // Match any network id
   >
   > },

3. Run these commands on terminal to compile your contracts and deploy them to blockchain.

   > truffle compile

   > truffle migrate

4. run this command to start IPFS

   > ipfs daemon

5. Last thing, run these commands to start your local web server and test the BLOX!

   > npm run start

---

## THAT'S IT!

That's it ! Now you can upload your files using simple BLOX! UI and forget about your files existence. BLOX! will remember forever.

*~as long as you wish actually...* 



---

## Take a quick peek!

[bloxx.netlify.app](bloxx.netlify.app)

## Preview



![](https://ipfs.io/ipfs/QmTQtTy8BSYZX7CBYHsNcdPqAgS2k2Qfsg2u2TjZacRhwk)







## 🔧 Project Diagram

![Project Diagram](https://i.gyazo.com/2738ea6743a40036756b1b5714ab9fa8.png)
