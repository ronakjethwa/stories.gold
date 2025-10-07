// Test file with intentional issues
var incorrectVar = 'using var instead of const';
function missingReturnType(param: any) {
  console.log('debugging');
  return param;
}

interface EmptyInterface {}

const unusedVariable = 'this is not used';

export const Component = () => {
  alert('using alert');
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  );
};
