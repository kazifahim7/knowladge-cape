import PropTypes from 'prop-types';

const Mark = ({ item }) => {
    return (
        <div className='p-5 text-2xl font-medium rounded-xl bg-slate-200 my-3'>
            <h3>{item.title}</h3>

        </div>
    );
};
Mark.propTypes = {
    item: PropTypes.object
}

export default Mark;