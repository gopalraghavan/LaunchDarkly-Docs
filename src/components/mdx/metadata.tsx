/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { FunctionComponent } from 'react'
import pluralize from 'pluralize'

interface MetadataProps {
  timeToRead: number
  lastModifiedDateFormatted: string
}
const Metadata: FunctionComponent<MetadataProps> = ({ timeToRead, lastModifiedDateFormatted }) => {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 6,
      }}
    >
      <Themed.h5>
        Read time: {timeToRead} {pluralize('minute', timeToRead)}
      </Themed.h5>
      <Themed.h5>Last edited: {lastModifiedDateFormatted}</Themed.h5>
    </div>
  )
}

export default Metadata
