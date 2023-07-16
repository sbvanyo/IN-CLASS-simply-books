import React, { useState, useEffect } from 'react';
import { useAuth } from '../../utils/context/authContext';
import AuthorCard from '../../components/AuthorCard';
import { getAuthors } from '../../api/authorData';

function Authors() {
  // TODO: Set a state for books
  const [authors, setAuthors] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the authors
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // TODO: make the call to the API to get all the authors on component render
  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div className="text-center my-4">
      {/* <Link href="/book/new" passHref>
        <Button>Add A Book</Button>
      </Link> */}
      <div className="d-flex flex-wrap">
        {/* TODO: map over authors here using AuthorCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>

    </div>
  );
}

export default Authors;
