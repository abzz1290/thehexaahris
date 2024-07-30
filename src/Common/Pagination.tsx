// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";


// const Pagination = ({ data, currentPage, setCurrentPage, perPageData, currentdata }: any) => {

//     const handleClick = (e: any) => {
//         setCurrentPage(e);
//     };

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(data?.length / perPageData); i++) {
//         pageNumbers.push(i);
//     }
//     const handleprevPage = () => {
//         let prevPage = currentPage - 1;
//         setCurrentPage(prevPage);
//     };
//     const handlenextPage = () => {
//         let nextPage = currentPage + 1;
//         setCurrentPage(nextPage);
//     };

//     useEffect(() => {
//         if (pageNumbers.length && pageNumbers.length < currentPage) {
//             setCurrentPage(pageNumbers.length);
//         }

//     }, [pageNumbers.length, currentPage, setCurrentPage]);
//     return (
//         <React.Fragment>
//             <div className="flex flex-col items-center mb-5 md:flex-row">
//                 <div className="mb-4 grow md:mb-0">
//                     <p className="text-slate-500 dark:text-zink-200">Showing <b>{currentdata.length}</b> of <b>{data.length}</b> Results</p>
//                 </div>
//                 <ul className="flex flex-wrap items-center gap-2 shrink-0">
//                     {currentPage <= 1 ? (
//                         <Link className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto disabled" to="#!">
//                             <ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev
//                         </Link>
//                     ) :
//                         <li className={currentPage <= 1 ? "disabled" : ""}>
//                             <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto" onClick={handleprevPage}>
//                                 <ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev
//                             </Link>
//                         </li>
//                     }

//                     {pageNumbers.map((item, key) => (
//                         <React.Fragment key={key}>
//                             <li>
//                                 <Link to="#!" className={currentPage === item ? "inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active" : "inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"} onClick={() => handleClick(item)}>{item}</Link>
//                             </li>
//                         </React.Fragment>
//                     ))}

//                     {currentPage >= pageNumbers.length ? (
//                         <Link className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto disabled" to="#!">
//                             Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" />
//                         </Link>
//                     ) :
//                         <li className={currentPage <= 1 ? "disabled" : ""}>
//                             <Link to="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto" onClick={handlenextPage}>Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" /></Link>
//                         </li>
//                     }
//                 </ul>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Pagination;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    data: any[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    perPageData: number;
    currentdata: any[];
}

const Pagination: React.FC<PaginationProps> = ({ data, currentPage, setCurrentPage, perPageData, currentdata }) => {

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data?.length / perPageData); i++) {
        pageNumbers.push(i);
    }

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length);
        }
    }, [pageNumbers.length, currentPage, setCurrentPage]);

    const commonClasses = "inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500";

    return (
        <div className="flex flex-col items-center mb-5 md:flex-row">
            <div className="mb-4 grow md:mb-0">
                <p className="text-slate-500 dark:text-zink-200">Showing <b>{currentdata.length}</b> of <b>{data.length}</b> Results</p>
            </div>
            <ul className="flex flex-wrap items-center gap-2 shrink-0">
                {currentPage <= 1 ? (
                    <Link className={`${commonClasses} [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto disabled`} to="#!">
                        <ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev
                    </Link>
                ) : (
                    <li>
                        <Link to="#!" className={`${commonClasses} ${currentPage <= 1 ? "disabled" : ""}`} onClick={handlePrevPage}>
                            <ChevronLeft className="size-4 mr-1 rtl:rotate-180" /> Prev
                        </Link>
                    </li>
                )}
                {pageNumbers.map((item) => (
                    <li key={item}>
                        <Link to="#!" className={`${commonClasses} ${currentPage === item ? "[&.active]:text-white dark:[&.active]:text-white [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 active" : ""}`} onClick={() => handleClick(item)}>
                            {item}
                        </Link>
                    </li>
                ))}
                {currentPage >= pageNumbers.length ? (
                    <Link className={`${commonClasses} [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto disabled`} to="#!">
                        Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" />
                    </Link>
                ) : (
                    <li>
                        <Link to="#!" className={`${commonClasses} ${currentPage >= pageNumbers.length ? "disabled" : ""}`} onClick={handleNextPage}>
                            Next <ChevronRight className="size-4 ml-1 rtl:rotate-180" />
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
