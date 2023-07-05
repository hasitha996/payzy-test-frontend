import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSave,
  faTimes,
  faRedoAlt,
  faPlusCircle,
  faTimesCircle,
  faSyncAlt,
  faPrint,
  faAngleUp,
  faAngleDown,
  faSearch,
  faTrashAlt,
  faTrash,
  faPlayCircle,
  faMoneyBillWaveAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

/**
 * * collapseState prop here is only used in the collapse buttons
 */

const SystemButton = ({
  type,
  method,
  collapseState,
  btnText,
  showText,
  classes,
  disabled,
}) => {
  const SysButton = () => {
    switch (type) {
      case 'add-new':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-primary btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faPlus} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Add New'}
              </span>
            ) : null}
          </button>
        );

      case 'edit':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-outline-info btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faEdit} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Edit'}
              </span>
            ) : null}
          </button>
        );

      case 'save':
        return (
          <button
            type="submit"
            className={
              classes
                ? classes
                : 'btn btn-success btn-block btn-sm rounded-0 shadow-sm'
            }
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faSave} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Save Changes'}
              </span>
            ) : null}
          </button>
        );

      case 'no-form-save':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-success btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faSave} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Save Changes'}
              </span>
            ) : null}
          </button>
        );

      case 'close':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-outline-secondary btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faTimes} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Close'}
              </span>
            ) : null}
          </button>
        );

      case 'reset':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-outline-danger btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faRedoAlt} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Reset'}
              </span>
            ) : null}
          </button>
        );
      case 'print':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-primary btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faPrint} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Print'}
              </span>
            ) : null}
          </button>
        );

      case 'add-row':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-info btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faPlusCircle} />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : null}
              </span>
            ) : null}
          </button>
        );

      case 'remove-row':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-outline-danger btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : null}
              </span>
            ) : null}
          </button>
        );

      case 'load':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-info btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faSyncAlt} />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Load Data'}
              </span>
            ) : null}
            &nbsp; &nbsp;
          </button>
        );

      case 'section-toggle':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-hide btn-block btn-sm rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            {collapseState === true ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Toggle'}
              </span>
            ) : null}
          </button>
        );

      case 'search':
        return (
          <button
            type="submit"
            className={
              classes
                ? classes
                : 'btn btn-success btn-block btn-sm rounded-0 shadow-sm'
            }
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faSearch} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Search'}
              </span>
            ) : null}
          </button>
        );

      case 'delete':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-sm btn-outline-danger btn-block rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faTrashAlt} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Delete'}
              </span>
            ) : null}
          </button>
        );

      case 'cancel':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-sm btn-warning btn-block rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faTrash} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Cancel'}
              </span>
            ) : null}
          </button>
        );

      case 'payment':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-sm btn-secondary btn-block rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faMoneyBillWaveAlt} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Payment'}
              </span>
            ) : null}
          </button>
        );

      case 'start':
        return (
          <button
            type="button"
            className={
              classes
                ? classes
                : 'btn btn-sm btn-success btn-block rounded-0 shadow-sm'
            }
            onClick={() => method()}
            disabled={disabled ? true : false}
          >
            <span>
              <FontAwesomeIcon icon={faPlayCircle} size="sm" />
            </span>
            {showText ? (
              <span>
                &nbsp; &nbsp;
                {btnText ? btnText : 'Start'}
              </span>
            ) : null}
          </button>
        );

      default:
        break;
    }
  };

  return (
    <div>
      <SysButton />
    </div>
  );
};

export default SystemButton;
