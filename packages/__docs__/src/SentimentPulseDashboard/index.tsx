/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useState } from 'react'
import {
  View,
  Text,
  Heading,
  Button,
  Link,
  Select,
  TextInput,
  DateInput,
  Modal,
  Flex,
  List,
  Badge,
  IconButton,
  Tooltip,
  Grid,
  SideNavBar,
  Alert
} from '@instructure/ui'
import { Card } from '@instructure/ui-card'
import {
  IconDashboardLine,
  BookInstUIIcon,
  IconCalendarMonthLine,
  IconInboxLine,
  IconGradebookLine,
  IconUserLine,
  IconSettingsLine,
  IconInfoLine,
  IconRefreshLine,
  IconXLine,
  IconSearchLine
} from '@instructure/ui-icons'

type SentimentType =
  | 'Positive'
  | 'Neutral'
  | 'Negative'
  | 'Confused'
  | 'Frustrated'

interface SentimentData {
  type: SentimentType
  emoji: string
  percentage: number
  color: string
}

interface Post {
  id: string
  sentiment: SentimentType
  emoji: string
  author: string
  date: string
  topic: string
  content: string
  confidence: 'High' | 'Medium' | 'Low'
}

const sentimentData: SentimentData[] = [
  { type: 'Positive', emoji: '😊', percentage: 45, color: '#4ade80' },
  { type: 'Neutral', emoji: '😐', percentage: 20, color: '#9ca3af' },
  { type: 'Negative', emoji: '😞', percentage: 15, color: '#f87171' },
  { type: 'Confused', emoji: '😕', percentage: 10, color: '#fbbf24' },
  { type: 'Frustrated', emoji: '😤', percentage: 10, color: '#fb923c' }
]

const samplePosts: Post[] = [
  {
    id: '1',
    sentiment: 'Positive',
    emoji: '😊',
    author: 'Anonymized Contributor',
    date: 'Oct 24, 10:30 AM',
    topic: 'Discussion: Cell Structure',
    content:
      'I really enjoyed the lecture on cell structure today! The animations made it so much easier to visualize the different organelles and their functions.',
    confidence: 'High'
  },
  {
    id: '2',
    sentiment: 'Confused',
    emoji: '😕',
    author: 'Anonymized Contributor',
    date: 'Oct 23, 03:15 PM',
    topic: 'Discussion: Photosynthesis Cycle',
    content:
      "I'm a bit lost on the Calvin cycle. I understand the inputs and outputs, but the specific steps and enzyme reactions are still fuzzy.",
    confidence: 'Medium'
  },
  {
    id: '3',
    sentiment: 'Frustrated',
    emoji: '😤',
    author: 'Anonymized Contributor',
    date: 'Oct 22, 09:00 AM',
    topic: 'Lab Report #2 Feedback',
    content:
      "I'm pretty frustrated with the grading on the last lab report. I followed all the instructions, but still lost points for minor formatting issues.",
    confidence: 'High'
  }
]

const SentimentBarChart: React.FC<{
  data: SentimentData[]
  onBarClick: (sentiment: SentimentType) => void
}> = ({ data, onBarClick }) => {
  return (
    <View
      display="flex"
      height="8rem"
      borderWidth="small"
      borderColor="border"
      padding="medium"
      margin="medium none"
      style={{
        alignItems: 'flex-end'
      }}
    >
      {data.map((item) => (
        <View
          key={item.type}
          display="flex"
          width="20%"
          height="100%"
          margin="none small"
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            cursor: 'pointer'
          }}
          onClick={() => onBarClick(item.type)}
        >
          <View margin="none none small none">
            <Text size="large">{item.emoji}</Text>
          </View>
          <View
            width="2rem"
            borderRadius="small"
            style={{
              backgroundColor: item.color,
              height: `${item.percentage}%`,
              minHeight: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          />
          <View margin="small none none none">
            <Text size="small">{item.percentage}%</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const SentimentPulseDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSentiment, setSelectedSentiment] =
    useState<SentimentType | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleBarClick = (sentiment: SentimentType) => {
    setSelectedSentiment(sentiment)
    setIsModalOpen(true)
  }

  const handleViewAll = () => {
    setSelectedSentiment(null)
    setIsModalOpen(true)
  }

  return (
    <View display="flex" height="100vh" overflowY="hidden">
      {/* Sidebar */}
      <View
        position="fixed"
        insetInlineStart="0"
        insetBlockStart="0"
        height="100vh"
        width="16rem"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'transparent'
        }}
      >
        <View style={{ flex: 1, overflowY: 'auto' }}>
          <SideNavBar
            label="Main navigation"
            toggleLabel={{
              expandedLabel: 'Minimize SideNavBar',
              minimizedLabel: 'Expand SideNavBar'
            }}
          >
            <SideNavBar.Item
              icon={<IconDashboardLine />}
              label="Dashboard"
              href="#"
            />
            <SideNavBar.Item
              icon={<BookInstUIIcon />}
              label="Courses"
              href="#"
            />
            <SideNavBar.Item
              icon={<IconCalendarMonthLine />}
              label="Calendar"
              href="#"
            />
            <SideNavBar.Item icon={<IconInboxLine />} label="Inbox" href="#" />
            <SideNavBar.Item
              icon={<IconGradebookLine />}
              label="Grades"
              href="#"
              selected
            />
            <SideNavBar.Item icon={<IconUserLine />} label="Account" href="#" />
          </SideNavBar>
        </View>
      </View>

      {/* Main Content */}
      <View
        margin="0 0 0 16rem"
        padding="large"
        overflowY="auto"
        height="100vh"
      >
        {/* Header */}
        <View margin="none none large none">
          <Flex justifyItems="space-between" alignItems="center">
            <Heading level="h1" margin="none">
              Biology 101: Introduction to Life Sciences
            </Heading>
            <Button renderIcon={<IconSettingsLine />}>Settings</Button>
          </Flex>
        </View>

        {/* Main Content Grid */}
        <Grid rowSpacing="large" colSpacing="large">
          {/* Top Row: Sentiment Pulse and Upcoming Assignments */}
          <Grid.Row>
            <Grid.Col colSpan={8}>
              <Card>
                <Flex
                  justifyItems="space-between"
                  alignItems="center"
                  margin="none none medium none"
                >
                  <Heading level="h2">
                    Real-time Student Sentiment Pulse
                  </Heading>
                  <Flex gap="small">
                    <Tooltip renderTip="Learn more about Sentiment Pulse">
                      <IconButton
                        renderIcon={IconInfoLine}
                        screenReaderLabel="Info"
                        size="small"
                      />
                    </Tooltip>
                    <Tooltip renderTip="Refresh sentiment data">
                      <IconButton
                        renderIcon={IconRefreshLine}
                        screenReaderLabel="Refresh"
                        size="small"
                      />
                    </Tooltip>
                  </Flex>
                </Flex>
                <View margin="none none medium none">
                  <Text>
                    Aggregated sentiment from recent forum posts. Click on a
                    sentiment type to see contributing posts.
                  </Text>
                </View>

                {/* Filters */}
                <Flex gap="medium" wrap="wrap" margin="medium none">
                  <Select
                    renderLabel="Filter by Discussion Topic"
                    width="12rem"
                    value=""
                  >
                    <option value="">All Discussions</option>
                    <option value="module1">Module 1: Cell Biology</option>
                    <option value="module2">Module 2: Genetics</option>
                    <option value="module3">Module 3: Ecology</option>
                  </Select>
                  <Select
                    renderLabel="Filter by Course Module"
                    width="12rem"
                    value=""
                  >
                    <option value="">All Modules</option>
                    <option value="module1">Module 1</option>
                    <option value="module2">Module 2</option>
                    <option value="module3">Module 3</option>
                  </Select>
                  <DateInput renderLabel="Start Date" width="10rem" />
                  <DateInput renderLabel="End Date" width="10rem" />
                </Flex>

                {/* Sentiment Chart */}
                <SentimentBarChart
                  data={sentimentData}
                  onBarClick={handleBarClick}
                />

                <Flex justifyItems="end" margin="medium none none none">
                  <Button color="primary" onClick={handleViewAll}>
                    View All Sentiment Posts
                  </Button>
                </Flex>
              </Card>
            </Grid.Col>
            <Grid.Col colSpan={4}>
              <Card>
                <Heading level="h3" margin="none none medium none">
                  Upcoming Assignments
                </Heading>
                <List>
                  <List.Item>Lab Report #3 - Due Oct 26</List.Item>
                  <List.Item>Midterm Exam - Oct 30</List.Item>
                  <List.Item>Discussion 4 - Due Nov 2</List.Item>
                </List>
                <Link href="#" margin="medium none none none" display="block">
                  View All
                </Link>
              </Card>
            </Grid.Col>
          </Grid.Row>

          {/* Actionable Insights Row */}
          <Grid.Row>
            <Grid.Col colSpan={12}>
              <Card>
                <Heading level="h2" margin="none none medium none">
                  Actionable Insights
                </Heading>
                <View margin="none none medium none">
                  <Text>
                    Based on recent sentiment trends, here are some suggestions:
                  </Text>
                </View>
                <Alert
                  variant="info"
                  hasShadow={false}
                  margin="none none small none"
                  variantScreenReaderLabel="Information, "
                >
                  <View>
                    <Heading level="h4" margin="none none x-small none">
                      High Confusion in &apos;Photosynthesis Cycle&apos;
                    </Heading>
                    <Text size="small" as="p">
                      Consider holding an extra Q&A session next week, or share
                      supplementary video resources explaining the Calvin cycle.
                    </Text>
                  </View>
                </Alert>
                <Alert
                  variant="warning"
                  hasShadow={false}
                  margin="none none small none"
                  variantScreenReaderLabel="Warning, "
                >
                  <View>
                    <Heading level="h4" margin="none none x-small none">
                      Frustration regarding &apos;Lab Report #2&apos; Grading
                    </Heading>
                    <Text size="small" as="p">
                      Review rubric clarity for future assignments. Acknowledge
                      student feedback in an announcement, offering to discuss
                      grading concerns individually.
                    </Text>
                  </View>
                </Alert>
                <Alert
                  variant="success"
                  hasShadow={false}
                  variantScreenReaderLabel="Success, "
                >
                  <View>
                    <Heading level="h4" margin="none none x-small none">
                      Positive engagement in &apos;Cell Structure&apos;
                      Discussion
                    </Heading>
                    <Text size="small" as="p">
                      Great job! Keep up the good work. Consider replicating
                      successful elements (e.g., interactive animations) in
                      future modules.
                    </Text>
                  </View>
                </Alert>
              </Card>
            </Grid.Col>
          </Grid.Row>

          {/* Bottom Row: Course Announcements and Quick Links */}
          <Grid.Row>
            <Grid.Col colSpan={6}>
              <Card>
                <Heading level="h3" margin="none none medium none">
                  Course Announcements
                </Heading>
                <List>
                  <List.Item>
                    <Text weight="bold">Welcome to Module 3!</Text> - Oct 20
                  </List.Item>
                  <List.Item>
                    <Text weight="bold">Extra Credit Opportunity</Text> - Oct 18
                  </List.Item>
                </List>
                <Link href="#" margin="medium none none none" display="block">
                  View All
                </Link>
              </Card>
            </Grid.Col>
            <Grid.Col colSpan={6}>
              <Card>
                <Heading level="h3" margin="none none medium none">
                  Quick Links
                </Heading>
                <Grid rowSpacing="small" colSpacing="small">
                  <Grid.Row>
                    <Grid.Col colSpan={6}>
                      <Button color="secondary" width="100%">
                        Syllabus
                      </Button>
                    </Grid.Col>
                    <Grid.Col colSpan={6}>
                      <Button color="secondary" width="100%">
                        Discussions
                      </Button>
                    </Grid.Col>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Col colSpan={6}>
                      <Button color="secondary" width="100%">
                        Modules
                      </Button>
                    </Grid.Col>
                    <Grid.Col colSpan={6}>
                      <Button color="secondary" width="100%">
                        Grades
                      </Button>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>

      {/* Sentiment Detail Modal */}
      <Modal
        open={isModalOpen}
        onDismiss={() => setIsModalOpen(false)}
        size="large"
        label={
          selectedSentiment
            ? `${
                sentimentData.find((s) => s.type === selectedSentiment)?.emoji
              } ${selectedSentiment} Posts`
            : 'Overall Sentiment Posts'
        }
      >
        <Modal.Body>
          <Flex justifyItems="end" margin="none none medium none">
            <IconButton
              renderIcon={IconXLine}
              screenReaderLabel="Close"
              onClick={() => setIsModalOpen(false)}
            />
          </Flex>
          {/* Search and Filter */}
          <Flex gap="medium" wrap="wrap" margin="none none medium none">
            <TextInput
              renderLabel="Search posts"
              renderBeforeInput={<IconSearchLine inline={false} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              width="20rem"
            />
            <Select renderLabel="Filter by Confidence" width="12rem" value="">
              <option value="">All Confidence</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Select>
          </Flex>

          {/* Posts List */}
          <View>
            {samplePosts.map((post) => (
              <View key={post.id} margin="none none small none">
                <Card size="medium">
                  <Flex
                    justifyItems="space-between"
                    alignItems="center"
                    margin="none none small none"
                  >
                    <Text size="small" color="secondary">
                      {post.author}, {post.date}
                    </Text>
                    <Flex gap="small" alignItems="center">
                      <Text size="large">{post.emoji}</Text>
                      <Badge
                        variant={
                          post.confidence === 'High' ? 'success' : 'danger'
                        }
                      >
                        {post.confidence} Confidence
                      </Badge>
                    </Flex>
                  </Flex>
                  <Heading level="h4" margin="none none x-small none">
                    {post.topic}
                  </Heading>
                  <Text>{post.content}</Text>
                  <Link href="#" margin="small none none none" display="block">
                    Read More
                  </Link>
                </Card>
              </View>
            ))}
          </View>
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyItems="space-between" alignItems="center">
            <Button disabled>Previous</Button>
            <Text>Page 1 of 5</Text>
            <Button>Next</Button>
          </Flex>
        </Modal.Footer>
      </Modal>
    </View>
  )
}

export default SentimentPulseDashboard
