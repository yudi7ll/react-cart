import React from 'react';

const Rating = ({ star }) => {
  let fa = [
	'fa-star',
	'fa-star',
	'fa-star',
	'fa-star',
	'fa-star'
  ];

  const Icon = () => fa.map((s, i) => {
	const icon = className => (
	  <i
		key={i}
		className={'text-danger fa ' + className}
	  ></i>
	);

	return i >= star 
	  ? icon(s + '-o')
	  : icon(s);
  });

  return (
	<>
	<span
	  className="font-weight-bold"
	>
	  { star + ' ' }
	</span>
	<Icon />
	</>
  );
}


export default Rating;
