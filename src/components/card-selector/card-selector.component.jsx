import './card-selector.styles.css';


const CardSelector = ({onChangeHandler})=>{
  return[
    <div key={'card-selector'} className='select-container'>
      <label className='calisto f4 lightest-blue'>Select your RoboHash </label>
      <select
        className='br4 ' 
        name='item-selected'
        onChange={onChangeHandler}
        defaultValue='1'
      >
        <option value="1">Original Robots</option>
        <option value="2">Random Monsters</option>
        <option value="3">Disembodied Heads</option>
        <option value="4">Beautiful Kittens</option>
        <option value="5">Random Human</option>
      </select>
  </div>

  ]
}

export default CardSelector;  