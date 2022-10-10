import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment';
import './me.css';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center oswald"  >
        <div className="row ">
          <main role="main" className="col-lg-12 ml-auto mr-auto oswald " style={{ maxWidth: '1024px' }}>
            <div className="content oswald">
              <p className="oswald ">&nbsp;</p>


              <div className="card mb-3 mx-auto bg-blackk oswald shadow-lg p-3 mb-5 bg-body rounded" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-blackk oswald" ><b className='oswald '>Share File!</b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group oswald">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace oswald"
                            placeholder="Description..."
                            
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="text-white  oswald"/>
                    <button type="submit" className="btn-light btn-block oswald blackk "><b>Upload!</b></button>
                  </form>
              </div>
              


              <p>&nbsp;</p>
              

              <table className="table-sm table-bordered text-monospace oswald bg-whitee shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-blackk text-white oswald  ">
                    <th scope="col" style={{ width: '10px'}}>Id</th>
                    <th scope="col" style={{ width: '200px'}}>Name</th>
                    <th scope="col" style={{ width: '230px'}}>Description</th>
                    <th scope="col" style={{ width: '120px'}}>Type</th>
                    <th scope="col" style={{ width: '90px'}}>Size</th>
                    <th scope="col" style={{ width: '90px'}}>Date</th>
                    <th scope="col" style={{ width: '120px'}}>Uploader</th>
                    <th scope="col" style={{ width: '120px'}}>View!</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key} className="oswald" >
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://infura-ipfs.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>            


            </div>
          </main>
        </div>
      </div>
      
      
    );
  }
}

export default Main;