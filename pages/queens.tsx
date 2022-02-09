import type { NextPage } from 'next';
import { QueenCat } from 'src/components/Cats/Queens/QueenCat';
import { britishQueenList } from 'src/components/Cats/Queens/britishQueenList';
import { scottishQueenList } from 'src/components/Cats/Queens/scottishQueenList';
import { ragdollsQueenList } from 'src/components/Cats/Queens/ragdollsQueenList';
import { useState } from 'react';

type QueensBreed = 'british' | 'scottish' | 'ragdoll';

const Queens: NextPage = () => {
	const [currentPage, setCurrentPage] = useState<QueensBreed>('british');

	return (
		<section>
			<h1 className="main-heading">Queens</h1>

			<div className="flex justify-center rounded-md mb-12" role="group">
				<button
					type="button"
					onClick={() => setCurrentPage('british')}
					className={`py-3 px-5 text-sm sm:text-md font-medium text-beige-600
					bg-white rounded-l-lg border border-gray-200
					hover:bg-beige-400 hover:text-blue-700 focus:z-10
					focus:ring-2 focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'british' && 'bg-beige-500'}`}
				>
					British Shorthair
				</button>
				<button
					type="button"
					onClick={() => setCurrentPage('ragdoll')}
					className={`py-3 px-5 text-sm sm:text-md font-medium text-beige-600
					bg-white border-t border-b border-gray-200 hover:bg-beige-400
					hover:text-blue-700 focus:z-10 focus:ring-2
					focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'ragdoll' && 'bg-beige-500'}`}
				>
					Ragdoll
				</button>
				<button
					type="button"
					onClick={() => setCurrentPage('scottish')}
					className={`py-3 px-5 text-sm sm:text-md font-medium text-beige-600
					bg-white rounded-r-md border border-gray-200 hover:bg-beige-400
					hover:text-blue-700 focus:z-10 focus:ring-2
					focus:ring-blue-700 focus:text-blue-700
					${currentPage === 'scottish' && 'bg-beige-500'}`}
				>
					Scottish Fold
				</button>
			</div>

			{currentPage === 'british' ? (
				<QueenCat catList={britishQueenList} />
			) : null}
			{currentPage === 'scottish' ? (
				<QueenCat catList={scottishQueenList} />
			) : null}
			{currentPage === 'ragdoll' ? (
				<QueenCat catList={ragdollsQueenList} />
			) : null}
		</section>
	);
};

export default Queens;
