function RepositoryList({ reposNumber }) {
  return (
    <div>
      <h4>
        {reposNumber} {reposNumber === 1 ? 'repository' : 'repositories'}
      </h4>
    </div>
  );
}

export default RepositoryList;
