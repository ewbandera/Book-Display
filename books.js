function Book({data}){
    const bodyId = `#${data.isbn}`;
    return (
        
        
        <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn" data-toggle="collapse" data-target={bodyId} aria-expanded="false" aria-controls="collapseOne">
              {data.title}
            </button>
          </h5>
        </div>
    
        <div id={data.isbn} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
          <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Subtitle:</td>
                        <td>{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Author:</td>
                        <td>{data.author}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Publisher:</td>
                        <td>{data.publisher}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Description:</td>
                        <td>{data.description}</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
      </div>

)}