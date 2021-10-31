import React from 'react';

function Album(props) {

  return (

    <div className="album py-5 bg-light">
    <div className="container">
        <div className="row">
            <div className="col-md-12" id="collection-heading">
                <span>My Album</span>
            </div>
        </div>
        <div className="row">

        {props.posts.map((post) => (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img src={post.thumbnailUrl} className="card-img-top" alt={post.url} />
                <div className="card-body">
                    <p className="card-text"> {post.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">12 mins</small>
                    </div>
                </div>
            </div>
        </div>
        ))}
            

        </div>
    </div>
    </div>



  );
}

export default Album;

