import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'components/Modal/Modal';
import ModalTitle from 'components/ModalTitle/ModalTitle';
import ButtonMain from 'shared/components/button/Button';
import { BlackPlusButton } from 'shared/components/plusButton/PlusButtons';
import InputField from 'shared/components/inputField/InputField';
import InputErrorMessage from 'shared/components/inputErrorMessage/InputErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, editColumn } from 'redux/task/taskOperations';
import { getBoardId, getColumn } from 'redux/task/taskSelectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TitleSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const ModalColumn = ({ onClose, title, btnName, columnTitle = '', column }) => {
  const dispatch = useDispatch();

  const board = useSelector(getBoardId);
  const columns = useSelector(getColumn);

  return (
    <Modal onClose={onClose}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <ModalTitle>{title}</ModalTitle>

      <Formik
        initialValues={{
          title: columnTitle,
        }}
        validationSchema={TitleSchema}
        onSubmit={(values, { resetForm }) => {
          const columnForEdit = columns.filter(el => el._id !== column);
          if (
            columnForEdit.some(
              el => el.title.toLowerCase() === values.title.toLowerCase()
            )
          ) {
            return toast.warn('This title already exists!');
          }

          if (columnTitle) {
            dispatch(editColumn({ body: { ...values, board }, id: column }));
          } else {
            dispatch(addColumn({ ...values, board }));
          }
          resetForm();
          onClose();
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <label htmlFor="columnTitle"></label>
            <InputField
              as={Field}
              text="Title"
              id="columnTitle"
              name="title"
              type="text"
              onChange={handleChange('title')}
              value={values.title || ''}
            />
            <InputErrorMessage name="title" component={'p'} />
            <ButtonMain>
              <BlackPlusButton />
              {btnName}
            </ButtonMain>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalColumn;
