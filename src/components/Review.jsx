const Review=()=>{
  return(<>
  <form>
    <input type="text" placeholder="Review the roller coaster"/>
    <br />
    <label >Rate the roller coaster from 5</label>
    <br />
    <input type="radio" value="1"/><label>1</label>
    <input type="radio" value="2"/><label>2</label>
    <input type="radio" value="3"/><label>3</label>
    <input type="radio" value="4"/><label>4</label>
    <input type="radio" value="5"/><label>5</label>
  </form>
  </>)
}
export default Review
