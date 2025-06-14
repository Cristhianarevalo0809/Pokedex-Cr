import { Link } from 'react-router';
import './Pagination.css';

function Pagination({ page, totalPages, prev, next }) {
	// This component is used to display pagination controls.
	return (
		<div className="pagination">
			<div className="pagination__container">
				<p className="pagination__info">
					{page} of {totalPages}
				</p>
				<div className="pagination__btns">
					<button
						className="pagination__btn"
						onClick={prev}
						disabled={page === 1}
					>
						Anterior
					</button>
					<button
						className="pagination__btn"
						onClick={next}
						disabled={page === totalPages}
					>
						Siguiente
					</button>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Pagination;
