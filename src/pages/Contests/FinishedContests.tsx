import React, { useMemo } from "react"
import { DateTime } from "luxon"
import { Box } from "../../components/Box"
import { Column, Row } from "../../components/Layout"
import { Text } from "../../components/Text"
import { Title } from "../../components/Title"

import styles from "./Contests.module.scss"
import { commify } from "../../utils/units"
import { Table, TBody, Td, Th, THead, Tr } from "../../components/Table/Table"
import { Contest } from "../../hooks/api/contests"
import { FaLock } from "react-icons/fa"

type Props = {
  contests?: Contest[]
  onContestClick?: (id: number) => void
}

export const FinishedContests: React.FC<Props> = ({ contests, onContestClick }) => {
  const finishedContests = useMemo(
    () => contests?.filter((c) => c.status === "FINISHED").sort((a, b) => b.endDate - a.endDate),
    [contests]
  )

  if (!finishedContests || finishedContests.length === 0) return null

  return (
    <Box shadow={false} fullWidth>
      <Title variant="h2">FINISHED</Title>
      <Table>
        <THead>
          <Tr>
            <Th className={styles.logoColumn}></Th>
            <Th className={styles.contestColumn}>
              <Text>Contest</Text>
            </Th>
            <Th>
              <Text alignment="center">Total Rewards</Text>
            </Th>
            <Th>
              <Text alignment="center">Started</Text>
            </Th>
            <Th>
              <Text alignment="center">Ended</Text>
            </Th>
          </Tr>
        </THead>
        <TBody>
          {finishedContests?.map((contest) => {
            const startDate = DateTime.fromSeconds(contest.startDate)
            const endDate = DateTime.fromSeconds(contest.endDate)

            return (
              <Tr
                key={contest.id}
                onClick={() => onContestClick && onContestClick(contest.id)}
                className={styles.finishedContest}
              >
                <Td>
                  <img src={contest.logoURL} alt={contest.title} width={80} className={styles.logo} />
                </Td>
                <Td>
                  <Column spacing="s">
                    {["JUDGING", "SHERLOCK_JUDGING"].includes(contest.status) && (
                      <Text variant="alternate" strong size="small">
                        JUDGING
                      </Text>
                    )}
                    {contest.status === "ESCALATING" && (
                      <Text variant="alternate" strong size="small">
                        ESCALATIONS OPEN
                      </Text>
                    )}
                    <Row alignment={["start", "center"]} spacing="m">
                      <Title variant="h2">{contest.title}</Title>
                      {contest.private ? (
                        <Row spacing="xs">
                          <Text variant="secondary" size="small" strong>
                            <FaLock />
                            &nbsp; PRIVATE CONTEST
                          </Text>
                        </Row>
                      ) : null}
                    </Row>{" "}
                    <Text size="small">{contest.shortDescription}</Text>
                  </Column>
                </Td>
                <Td>
                  <Text variant="mono" strong size="large" alignment="center">
                    {commify(contest.prizePool + contest.leadSeniorAuditorFixedPay)} USDC
                  </Text>
                </Td>
                <Td>
                  <Column spacing="xs" alignment="center">
                    <Text strong size="large">
                      {startDate.toLocaleString(DateTime.DATE_MED)}
                    </Text>
                    <Text>{startDate.toLocaleString(DateTime.TIME_24_SIMPLE)}</Text>
                  </Column>
                </Td>
                <Td>
                  <Column spacing="xs" alignment="center">
                    <Text strong size="large">
                      {endDate.toLocaleString(DateTime.DATE_MED)}
                    </Text>
                    <Text>{endDate.toLocaleString(DateTime.TIME_24_SIMPLE)}</Text>
                  </Column>
                </Td>
              </Tr>
            )
          })}
        </TBody>
      </Table>
    </Box>
  )
}
