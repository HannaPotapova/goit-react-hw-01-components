import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            <VscCircleLargeFilled className={`${css.status} ${css[isOnline]}`} />
            {/* <span className={css.status}></span> */}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
};

export default FriendListItem;