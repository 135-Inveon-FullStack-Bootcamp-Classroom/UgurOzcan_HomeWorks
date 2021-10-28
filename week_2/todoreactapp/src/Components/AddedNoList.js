function AddedNoList() {
    return (
        <div class="mr-1" style={{"position" : "relative"}}>
            <div style={{"position": "absolute", "top": 0, "right": 0}}>
              <div
                id="liveToast"
                class="toast error hide"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-delay="4000"
              >
                <div>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="toast"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="toast-body">Listeye boş ekleme yapamazsınız!</div>
              </div>
            </div>
          </div>
    );
  }
  
  export default AddedNoList;
   
   
