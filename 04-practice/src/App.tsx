interface SkeletonProps {
  width?: string;
  length?: number;
}

const App = ({ width = "unset", length = 10 }: SkeletonProps) => {
  const skeletions = Array.from({ length }, ( _, idx ) => (
    <div key={idx} className="skeleton-shape"></div>
  ));
  
  return (
      <div className="skeleton-loader" style={{ width }}>
      {skeletions}
      </div>
  );
};

export default App;