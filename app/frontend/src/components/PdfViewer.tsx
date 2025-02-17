'use client'

import { Box } from '@mui/material'
import { pdfjs, Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url
).toString()

interface IProps {
	fileUrl: string
}

const PDFViewer = ({ fileUrl }: IProps) => {
	return (
		<Box border={1} borderColor="grey.300">
			<Document file={fileUrl}>
				<Page pageNumber={1} scale={0.5} />
			</Document>
		</Box>
	)
}

export default PDFViewer
