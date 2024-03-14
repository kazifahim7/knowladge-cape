import PropTypes from 'prop-types';
import Mark from './Mark';
const BookMark = ({ BookMarks, time }) => {

    return (

        <div className="md:w-1/3">
            <div className='text-center text-2xl p-2 rounded-lg'>
                <h1>Read time:{time}</h1>
            </div>
            <div className='text-center text-2xl font-semibold bg-slate-400 shadow-xl mt-2'>
                <h4>BookMarks:{BookMarks.length}</h4>
            </div>
            {
                BookMarks.map((item, idx) => <Mark key={idx} item={item}></Mark>)
            }


        </div>
    );
};
BookMark.propTypes = {
    BookMarks: PropTypes.array,
    time: PropTypes.number
}

export default BookMark;